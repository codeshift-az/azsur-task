import Container from '@components/ui/Container.tsx';
import about1 from '@assets/about/about1.jpg';
import Accordion from '@components/ui/Accordion.tsx';
import Tabs from '@components/ui/Tabs.tsx';
import SectionHeadline from '@components/ui/SectionHeadline.tsx';

const accordionItems = [
  {
    title: 'Aspernatur',
    content: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero.',
  },
  {
    title: 'Consectetur',
    content: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.',
  },
  {
    title: 'Redug Lagre',
    content: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.',
  },
  {
    title: 'Redug Lagret',
    content: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.',
  },
];
const tabData = [
  {
    label: 'Building',
    title: 'Building',
    content:
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus in dolor dolores unde ab, libero quo. Aut, laborum sequi ipsam nobis! Redug Lagre dolor sit amet, consectetur adipisicing elit. Expedita hic maxime commodi cum fugiat, architecto ducimus, doloribus fuga itaque omnis placeat, optio recusandae saepe porro dolore error voluptatibus ipsam tempora.',
  },
  {
    label: 'Painting',
    title: 'Renovation',
    content:
      'Hic quis repellat cum ullam, fuga deleniti illum nemo! Dolores fugiat necessitatibus, magni voluptatibus hic quis repellat cum ullam, fuga deleniti illum nemo! Redug Lagre dolor sit amet, consectetur adipisicing elit. Cumque deserunt magni voluptatibus hic quis repellat cum ullam, fuga deleniti illum nemo! Dolores fugiat necessitatibus, magni voluptatibus beatae mollitia. Eaque mollitia, incidunt voluptates dolores fugiat necessitatibus.',
  },
  {
    label: 'Isolation',
    title: 'Isolation',
    content:
      'Nemo! Dolores fugiat necessitatibus, magni voluptatibus hic quis repellat cum ullam, fuga deleniti illum nemo! Redug Lagre dolor sit amet, consectetur adipisicing elit. Cumque deserunt beatae mollitia. Eaque mollitia, incidunt voluptates dolores fugiat necessitatibus, magni voluptatibus hic quis repellat cum ullam, fuga deleniti illum nemo! Redug Lagre dolor sit amet, consectetur adipisicing elit.',
  },
];

const AboutUsSection = () => {
  return (
    <div className="about-area area-padding">
      <Container>
        <SectionHeadline>
          about us
        </SectionHeadline>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-dec">
              <div className="about-img">
                <img src={about1} alt="About us" />
              </div>
            </div>
          </div>
          <Accordion
            items={accordionItems}
          />
        </div>
        <div className="row second-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-head">
              <div className="about-text">
                <h4 className="sec-head">Who we Are</h4>
                <p>Redug Lagre dolor sit amet, consectetur adipisicing elit. Quae facilis, pariatur. Expedita nihil,
                  tenetur neque aliquid animi impedit molestias reiciendis sint quis. Consectetur molestias dolore rem,
                  eaque adipisci consequuntur placeat! Redug Lagre dolor sit amet,<br /> consectetur adipisicing elit.
                  Natus id repellat consequatur numquam accusantium minus eligendi veniam eaque est enim praesentium
                  architecto maiores nihil debitis eius, eos, vel minima. Laudantium accusantium minus eligendi veniam
                  eaque est enim praesentium architecto maiores nihil debitis eius, eos,accusantium minus eligendi
                  veniam eaque est enim praesentium architecto</p>
              </div>
            </div>
          </div>
          <Tabs tabs={tabData} />
          {/*<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">*/}
          {/*  <div className="tab-menu">*/}
          {/*    <ul className="nav nav-tabs" role="tablist">*/}
          {/*      <li className="active"><a href="#p-view-1" role="tab" data-toggle="tab">Buliding</a></li>*/}
          {/*      <li><a href="#p-view-2" role="tab" data-toggle="tab">painting</a></li>*/}
          {/*      <li><a href="#p-view-3" role="tab" data-toggle="tab">Isolation</a></li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*  <div className="tab-content">*/}
          {/*    <div className="tab-pane active" id="p-view-1">*/}
          {/*      <div className="tab-inner">*/}
          {/*        <div className="event-content head-team">*/}
          {/*          <h5>Building</h5>*/}
          {/*          <p> Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus*/}
          {/*            adipisci voluptas, praesentium maxime necessitatibus in dolor dolores unde ab, libero quo. Aut,*/}
          {/*            laborum sequi ipsam nobis!Redug Lagre dolor sit amet, consectetur adipisicing elit. Expedita hic*/}
          {/*            maxime commodi cum fugiat, architecto ducimus, doloribus fuga itaque omnis placeat, optio*/}
          {/*            recusandae saepe porro dolore error voluptatibus ipsam tempora.</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="tab-pane" id="p-view-2">*/}
          {/*      <div className="tab-inner">*/}
          {/*        <div className="event-content head-team">*/}
          {/*          <h5>Renovation</h5>*/}
          {/*          <p> hic quis repellat cum ullam, fuga deleniti illum nemo! olores fugiat necessitatibus, magni*/}
          {/*            voluptatibus hic quis repellat cum ullam, fuga deleniti illum nemo!Redug Lagre dolor sit amet,*/}
          {/*            consectetur adipisicing elit. Cumque deseruntmagni voluptatibus hic quis repellat cum ullam, fuga*/}
          {/*            deleniti illum nemo!dolores fugiat necessitatibus, magni voluptatibus beatae mollitia. Eaque*/}
          {/*            mollitia, incidunt voluptates dolores fugiat necessitatibus, </p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="tab-pane" id="p-view-3">*/}
          {/*      <div className="tab-inner">*/}
          {/*        <div className="event-content head-team">*/}
          {/*          <h5>Isolation</h5>*/}
          {/*          <p> nemo!dolores fugiat necessitatibus, magni voluptatibus hic quis repellat cum ullam, fuga*/}
          {/*            deleniti illum nemo! olores fugiat necessitatibus, magni voluptatibus hic quis repellat cum ullam,*/}
          {/*            fuga deleniti illum nemo! Redug Lagre dolor sit amet, consectetur adipisicing elit. Cumque*/}
          {/*            deserunt beatae mollitia. Eaque mollitia, incidunt voluptates dolores fugiat necessitatibus, magni*/}
          {/*            voluptatibus hic quis repellat cum ullam, fuga deleniti illum</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  )
    ;
};

export default AboutUsSection;