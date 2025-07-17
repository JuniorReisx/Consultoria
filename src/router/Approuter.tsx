import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/home";
import BusinessForm  from "../pages/Form/BusinessForm";
import NameForm from "../pages/Form/NameForm";
import NumberForm from "../pages/Form/NumberForm";
import InstagramForm from "../pages/Form/InstagramForm";
import AgeForm from "../pages/Form/AgeForm";
import IncomeForm from "../pages/Form/IncomeForm";
import FeedbackForm from "../pages/Form/FeedbackForm";
import InvestmentForm from "../pages/Form/InvestmentForm";
import YesorNoForm from "../pages/Form/YesorNoForm";
import WithVideoForm from "../pages/Form/WithVideoForm";
import ThankyouPage from "../pages/Form/ThankyouPage";
import VideoTrainingPage from "../pages/Form/VideoTrainingPage";

export function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BusinessForm" element={<BusinessForm />} />
        <Route path="/NameForm" element={<NameForm />} />
        <Route path="/NumberForm" element={<NumberForm />} />
        <Route path="/InstagramForm" element={<InstagramForm />} />
        <Route path="/AgeForm" element={<AgeForm />} />
        <Route path="/IncomeForm" element={<IncomeForm />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/InvestmentForm" element={<InvestmentForm />} />
        <Route path="/YesorNoForm" element={<YesorNoForm />} />
        <Route path="/WithVideoForm" element={<WithVideoForm />} />
        <Route path="/ThankyouPage" element={<ThankyouPage />} />
        <Route path="/VideoTrainingPage" element={<VideoTrainingPage />} />
      </Routes>
    </Router>
  );
}
