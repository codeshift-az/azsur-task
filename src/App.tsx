import { Fragment } from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Routes
import { publicRoutes } from '@/routes';

// Middlewares
import { LanguageMiddleware } from '@/routes/middlewares';

// Styles
import '@styles/bootstrap.css';
import '@styles/font-awesome.min.css';
import '@styles/main.css';
import '@styles/responsive.css';

const App = () => {
  const { i18n } = useTranslation();

  const supportedLngs = i18n.options.supportedLngs || ['en'];

  return (
    <Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Fragment key={index}>
            <Route
              path={route.path}
              element={
                <LanguageMiddleware>
                  {route.component}
                </LanguageMiddleware>
              }
            />
            {supportedLngs.map((lng) => (
              <Route
                key={`${index}-${lng}`}
                path={`/${lng}/${route.path.replace('/', '')}`}
                element={
                  <LanguageMiddleware>{route.component}</LanguageMiddleware>
                }
              />
            ))}
          </Fragment>
        ))}
      </Routes>
    </Fragment>
  );
};

export default App;
