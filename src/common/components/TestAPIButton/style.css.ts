import { css } from '@styled-system/css';

export const Button = css({
  padding: '10px 24px',
  background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(106, 17, 203, 0.15)',
  transition: 'background 0.2s, transform 0.1s',
  _hover: {
    background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
    transform: 'translateY(-2px) scale(1.03)',
  },
  _active: {
    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    transform: 'scale(0.98)',
  },
});
