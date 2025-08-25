import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useLocation, useNavigate } from 'react-router';
import * as s from './style.css';
import Btn from '@/common/components/Button';
import { cx } from '@styled-system/css';
import { useState } from 'react';
import MultilineInputfield from '@/features/post/components/MultilineInputField';
import { usePostReport, type CategoryType } from '@/features/report/apis/usePostReport';

interface Category {
  key: CategoryType;
  label: string;
  checked: boolean;
}

interface ReportPageState {
  reportedUserId: number;
  itemId: number;
  location: 'CHATROOM' | 'POST';
}

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ReportPageState;

  const ownerId = state.reportedUserId;
  const itemId = state.itemId;
  const { mutate: postReport } = usePostReport();

  const initialCategories: Category[] = [
    { key: 'OFFENSIVE', label: '부적절한 언어 및 비속어를 사용했어요.', checked: false },
    { key: 'SEXUAL_CONTENT', label: '음란물 또는 성적인 콘텐츠를 포함하고 있어요.', checked: false },
    { key: 'FAKE_ITEM', label: '허위 매물 및 정보를 포함하고 있어요.', checked: false },
    { key: 'PRIVACY', label: '본인 또는 타인의 개인정보를 유출했어요.', checked: false },
    { key: 'SPAM', label: '스팸 및 광고성 게시물이에요.', checked: false },
    { key: 'OTHER', label: '기타(직접 입력)', checked: false },
  ];

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [desc, setDesc] = useState<string>('');
  const isOtherChecked = categories.find(c => c.key === 'OTHER')?.checked ?? false;
  const isOtherValid = isOtherChecked && desc.trim() !== '';

  const isAnyChecked = (!isOtherChecked && categories.some(c => c.checked && c.key !== 'OTHER')) || isOtherValid;
  const btnMode: 'main' | 'default' | 'back' | 'disabled' = isAnyChecked ? 'main' : 'disabled';

  const toggleCategory = (key: string) => {
    setCategories(prev => prev.map(cat => (cat.key === key ? { ...cat, checked: !cat.checked } : cat)));
  };

  const report = () => {
    const selected = categories.filter(c => c.checked).map(c => c.key);

    postReport(
      {
        body: {
          categories: selected,
          description: desc,
          itemId: itemId,
          location: state.location,
          reportedUserId: ownerId,
        },
      },
      {
        onSuccess: () => {
          navigate(-1);
          // 토스트 띄워주기
        },
      },
    );
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const Content = ({ category }: { category: Category }) => {
    const { key, label, checked } = category;

    return (
      <button className={s.SubTitle} onClick={() => toggleCategory(key)}>
        {label}
        {checked ? (
          <div className={cx('mgc_checkbox_fill', s.Icon)} />
        ) : (
          <div className={s.CheckBoxContainer}>
            <div className={s.CheckBox} />
          </div>
        )}
      </button>
    );
  };

  return (
    <SafeArea>
      <CustomHeader onClick={() => navigate(-1)} title="신고하기" />
      <div className={s.Wrapper}>
        <div className={s.Title}>사용자 신고 사유를 선택해 주세요.</div>
        <div className={s.Content}>
          {categories.map(cat => (
            <Content key={cat.key} category={cat} />
          ))}
          {isOtherChecked && (
            <MultilineInputfield
              placeholder="신고 내용을 작성해 주세요."
              maxLength={500}
              value={desc}
              onChange={handleDesc}
            />
          )}
        </div>
      </div>
      <div className={s.Btn}>
        <Btn mode={btnMode} onClick={report}>
          제출하기
        </Btn>
      </div>
    </SafeArea>
  );
};

export default ReportPage;
