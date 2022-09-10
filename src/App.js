import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';
import store, { persistor } from "./store/store";
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop />
          <Routes />
        </PersistGate>
      </Provider>

    </div>
  );
};

export default App;
