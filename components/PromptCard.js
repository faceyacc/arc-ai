import styles from './PromptCards.module.css';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    opacity: 0.8,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#222222',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      opacity: 1,
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  
const PromptCard = (props) => { 
    return (
        <div className={styles.explorer_grid}>
            
            <Masonry columns={5} spacing={4}>
            {props.images_list.map((item, index) => (
                <div className={styles.prompt_card_wrapper}>
                <img  src={item} 
                        style={{
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        display: 'block',
                        width: '100%',
                        }}/>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    {/* <button>Try Prompt</button> */}
                    <BootstrapButton variant="contained" disableRipple>
                      Try Prompt
                    </BootstrapButton>
                </div>
            ))}
            </Masonry>          
        </div>
    )
}

export default PromptCard;