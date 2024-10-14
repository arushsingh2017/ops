import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, layout, Outlet } from 'react-router-dom';
import Banner from './component/HomeSlider'
import Navbar from './component/Header'
import StrategicInsights from './component/StrategicInsights';
import HomeService from './component/HomeService';
import Achivment from './component/Achivment';
import Customer from './component/Customer';
import AboutSection from './component/AboutSection';
import TestiminialVedio from './component/TestiminialVedio';
import CaseStudyHome from './component/CaseStudyHome';
import CustTestoimonial from './component/CustTestoimonial';
import HomeSlider from './component/HomeSlider';
import CloudDevSecOpsAdvisory from './component/CloudDevSecOpsAdvisory';
import HomePages from './component/HomePages';
import Header from './component/Header';
import CustomerStories from './component/CustomerStories';
import Career from './component/Career';
import LifeAtOpstree from './component/LifeAtOpstree';
import ContactUs from './component/ContactUs';
import DevOpsSolution from './component/DevOpsSolution';
import ContinuousDeliveryAutomation from './component/ContinuousDeliveryAutomation';
import CloudPlatformEngineering from './component/CloudPlatformEngineering';
import KubernetesContainerization from './component/KubernetesContainerization';
import SecurityasService from './component/SecurityasService';
import MonitoringPlatformReliability from './component/MonitoringPlatformReliability';
import CaseStudy from './component/CaseStudy';
import OpenSources from './component/OpenSources';
import Workshop from './component/Workshop';
import AwsPartner from './component/AwsPartner';
import UserListPages from './PagesComponent/UserListPages';
import UserLanding from './PagesComponent/UserLanding';
import CustomerStoriesDetailsPage from './component/CustomerStoriesDetailsPage';
import CasestudyLanding from './PagesComponent/CasestudyLanding';
import OpensourceDetails from './PagesComponent/OpensourceDetails';
import WorkshopDetails from './PagesComponent/WorkshopDetails';
import Signup from './PagesComponent/Signup';
import ClassData from './component/com/ClassData';
import UserRegisterList from './PagesComponent/UserRegisterList';
import StudentRegister from './PagesComponent/StudentRegister';
import CountryandCity from './PagesComponent/CountryandCity';
import Footer from './component/Footer';
import {footerContent} from './component/API/FooterData'

import{Link} from 'react-router-dom'


function App() {
  return (
    <>
    {/* {
      console.log(footerContent)
    } */}
      
      <Header />      
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/home" element={<HomePages />}></Route>
        <Route path='/slider' element={<HomeSlider />}></Route>
        <Route path='/case' element={<CaseStudyHome />}></Route>
        <Route path='/customerstories' element={<CustomerStories/>}></Route>
        <Route path='/careers' element={<Career/>}></Route>
        <Route path='/lifeatopstree' element={<LifeAtOpstree/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/devops-solution' element={<DevOpsSolution/>}></Route>
        <Route path='/cloud-devsecops-advisory' element={<CloudDevSecOpsAdvisory/>}></Route>
        <Route path='/continuous-delivery-automation' element={<ContinuousDeliveryAutomation/>}></Route>
        <Route path='/cloud-platform-engineering' element={<CloudPlatformEngineering/>}></Route>
        <Route path='/kubernetes-containerization' element={<KubernetesContainerization/>}> </Route>
        <Route path='/security-as-a-service' element={<SecurityasService/>}> </Route>
        <Route path='/monitoring-platform-reliability' element={<MonitoringPlatformReliability/>}> </Route>
        <Route path='/case-study' element={<CaseStudy/>}></Route>
        {/* <Route path='https://www.buildpiper.io/'></Route> */}
        <Route path='/opensource' element={<OpenSources/>}></Route>
        <Route path='/workshop' element={<Workshop/>}></Route>
        <Route path='/aws-consulting-partner' element={<AwsPartner/>}></Route>
        <Route path='/login' element={<Signup/>}></Route>

        <Route path='customerstories/:id' element={<CustomerStoriesDetailsPage/>}></Route>
        <Route path='case-study/:id' element={<CasestudyLanding/>}></Route>
        <Route path='opensource/:id' element={<OpensourceDetails/>}></Route>

        <Route path='workshop/:id' element={<WorkshopDetails/>}></Route>

        {/* <Route path='/user' element={<UserListPages/>}></Route>
        <Route path='/user/:id' element={<UserLanding/>}></Route> */}

        {/* class component data */}
        <Route path='/class' element={<ClassData/>}></Route>

        <Route path='/registerusers' element={<UserRegisterList/>}></Route>
        {/* <Route path='/student_register' element={<StudentRegister/>} </Route> */}
        <Route path='/student_register' element={<StudentRegister/>}></Route>
        <Route path='/countrylist' element={<CountryandCity/>}></Route>
      </Routes>
      {/* <Footer comName= {cname.serviceType} comAge= {cname.age}/> */}
      <Footer datalist={footerContent}/>
    </>
  );
}

export default App;
