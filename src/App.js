import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.components";
import Shop from "./routes/shop/shop.components"
import Checkout from "../src/routes/checkout/checkout.component"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication/>} />
          <Route path="checkout" element={<Checkout/>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
