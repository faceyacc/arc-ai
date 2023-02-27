import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import homepage from '../public/homepage.gif'
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import PromptCard from '../components/promptCard';

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





export default function Home() {

    // images
    const images = [
      "https://www.archpaper.com/wp-content/uploads/2022/08/Soomeen-Hahm_02.jpg",
      "https://metropolismag.com/wp-content/uploads/2022/07/featured_-Leilah_theythem_a_contemporary_house_carved_out_of_a_rock_face__534f7319-551f-4b34-9e52-938e651683c2.png",
      "https://preview.redd.it/what-do-you-think-about-ai-generated-architecture-v0-97u337ctkn4a1.jpg?width=1024&format=pjpg&auto=webp&s=7089bf3381898dc53ea1707263c0bc1bb0088fe9",
      "https://images.interestingengineering.com/images/DECEMBER/5_things_AI_architecture1.jpg",
      "https://scenehome.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/10421/2e660364-d76d-46b5-9331-c4e331c69931.jpg"
    ];

    for (let i = 0; i < 3; i++) {
      images.forEach((image) => {
        images.push(image);
      });
    }

 


  return (
    <>
      <Head>
        <title>ArcAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cvc}>

        <div className={styles.sidebar}>
          <ul className={styles.sidebarButtons}>
            <IconButton><SearchIcon className={styles.searchButton} sx={{ fontSize: 33, color: grey[200]}} /></IconButton>
          </ul>
        </div>

        <main>
          <div className={styles.dashboard}>
            
            {/* Begin Banner */}
            <div className={styles.bannerContainer}>
              <div className={styles.navBar}>
                <ul>
                  <li> <a>Home</a> </li>
                  <li><a>Features</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
              <div className={styles.videoBanner} >
                <div className={styles.videoBanner_text_container}>
                  <p>VIDEO TEXT HERE</p>
                </div>
                <Image className={styles.videoBanner} src={homepage} alt="homepage gif" width={600}/>
                <div></div>        
              </div>
            </div>    
            {/* End Banner */}

            {/* Begin Prompt Examplar */}
            <div className={styles.explorerWrapper}>
              <div className={styles.explorer_title_wrapper}> 
                <div className={styles.explorer_title} >Example Promps</div>
              </div>
              <PromptCard images_list={images}/>
            </div>
          </div>
        </main>
      </div>



      <style jsx>{`

        /* main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        } */
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: #333333;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
          list-style-type: none;
        }
      `}</style>
    </>
  )
}
