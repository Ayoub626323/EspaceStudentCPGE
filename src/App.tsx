import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import Abonement from "./pages/Abonement";
import Cours from "./pages/Cours";
import Exercices from "./pages/Exercices";
import ExerciceDetail from "./pages/ExerciceDetail";
import ExerciceCardContent from "./pages/ExerciceCardContent";
import Problemes from "./pages/Problemes";
import Concours from "./pages/Concours";
import Support from "./pages/Support";
import OrientationConcour from "./pages/OrientationConcour";
import TipeConseil from "./pages/TipeConseil";
import VisaCompusFrance from "./pages/VisaCompusFrance";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/abonement" element={<Abonement />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/exercices" element={<Exercices />} />
            <Route path="/exercices/:id" element={<ExerciceDetail />} />
            <Route
              path="/exercices/:id/card/:cardId"
              element={<ExerciceCardContent />}
            />
            <Route path="/problemes" element={<Problemes />} />
            <Route path="/concours" element={<Concours />} />
            <Route path="/orientation-concour" element={<OrientationConcour />} />
            <Route path="/tipe-conseil" element={<TipeConseil />} />
            <Route path="/visa-compus-france" element={<VisaCompusFrance />} />
            <Route path="/support" element={<Support />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
