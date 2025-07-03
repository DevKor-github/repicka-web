import SafeArea from '@/common/components/SafeArea';
import Header from './header';
import Navigator from './navigator';
import Step1 from '@/pages/PostPages/stepPages/step1'
import Step2 from '@/pages/PostPages/stepPages/step2';
import Step3 from '@/pages/PostPages/stepPages/step3';
import Step4 from '@/pages/PostPages/stepPages/step4';
import Step5 from '@/pages/PostPages/stepPages/step5';
import Step6 from '@/pages/PostPages/stepPages/step6';
// import StepIndicator from './'   // [TODO] stepindicator 만들어서 추가하기
import { useState } from 'react';

import * as s from './style.css';

const WriteLayout = () => {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
        }
    }

    return (
        <SafeArea>
            <div className={s.entireLayout}>
                <Header />
                <div className={s.innerPage}>
                    {renderStep()}
                </div>
                <Navigator step={step} setStep={setStep} />
            </div>
        </SafeArea>

    )
};

export default WriteLayout;
