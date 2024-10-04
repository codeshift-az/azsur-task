import Container from '@components/ui/Container.tsx';
import Logo from '@components/ui/Logo.tsx';
import { contactFetcher } from '@api/contacts/contactApi.ts';
import { Contact } from '@/types/Contact.ts';
import useSWR from 'swr';
import FlickerImage from '@components/ui/FlickerImage.tsx';
import TagItem from '@components/ui/TagItem.tsx';

import image1 from '@assets/footer/1.jpg';
import image4 from '@assets/footer/4.jpg';
import image5 from '@assets/footer/5.jpg';
import image6 from '@assets/footer/6.jpg';
import image7 from '@assets/footer/7.jpg';
import image8 from '@assets/footer/8.jpg';

const flickerImages = [
  { image: image1, link: '#' },
  { image: image7, link: '#' },
  { image: image8, link: '#' },
  { image: image4, link: '#' },
  { image: image5, link: '#' },
  { image: image6, link: '#' },
];

const tags = [
  'Building',
  'Isolation',
  'Interior',
  'Electrical',
  'Energy',
  'Flooring',
  'Painting',
  'Building',
  'Building',
];

const Footer = () => {
  const { data, isLoading } = useSWR<Contact>('/information', contactFetcher);

  return (
    <footer>
      <div className="footer-area">
        <Container>
          <div className="row">
            {/* Logo and description */}
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <Logo />
                  <p>Redug Lagre dolor sit amet, consectetur adipisicing elit. Minima in nostrum, veniam. Esse est
                    assumenda inventore, facere adipisci tenetur.</p>
                  <div className="footer-icons">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google"></i></a></li>
                      <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Information section */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Information</h4>
                  <p>You can contact us our consectetur adipisicing elit</p>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="footer-contacts">
                      <p><span>Tel:</span> {data?.phone}</p>
                      <p><span>Email:</span> {data?.email}</p>
                      <p><span>Working Hours:</span> 10am-5pm</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Flicker section */}
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Flicker</h4>
                  <div className="flicker-img">
                    {flickerImages.map((image, index) => (
                      <FlickerImage key={index} image={image.image} link={image.link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags section */}
            <div className="col-lg-3 col-md-3 hidden-sm col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <div className="popular-tag">
                    <h4>Tags</h4>
                    <ul>
                      {tags.map((tag, index) => (
                        <TagItem key={index} tag={tag} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="copyright-text text-center">
                <p>Copyright © {new Date().getFullYear()} <a href="#"> usdtheme</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
