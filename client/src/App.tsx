import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import FullStackDetail from "./components/courses/FullStackDetail";
import CloudComputingDetail from "./components/courses/CloudComputingDetail";
import DataScienceDetail from "./components/courses/DataScienceDetail";
import LeadershipDevelopmentDetail from "./components/courses/LeadershipDevelopmentDetail";
import SoftSkills from "./components/courses/SoftSkills";
import Business from "./components/courses/Business";
import Career from "./components/courses/Career";
import JobPlacementDetail from "./components/courses/JobPlacement";
import InterviewPreparationDetail from "./components/courses/InterviewPrep";
import WebDevelopmentDetail from "./components/courses/WebDevelopmentDetail";
import EnterpriseSolutionsDetail from "./components/courses/Enterprise";
import CloudSecurityDetail from "./components/courses/CloudSecurityDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
      <Route path="/products" component={Products} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      

      <Route path="/services/FullStackDetail" component={FullStackDetail} />
      <Route path="/services/Cloud" component={CloudComputingDetail} />
      <Route path="/services/DataScience" component={DataScienceDetail} />
      <Route path="/services/leadership" component={LeadershipDevelopmentDetail} />
      <Route path="/services/SoftSkill" component={SoftSkills} />
      <Route path="/services/Bussiness" component={Business} />
      <Route path="/services/Career" component={Career} />
      <Route path="/services/JobPlacement"  component={JobPlacementDetail} />
      <Route path="/services/InterviewPrep"  component={InterviewPreparationDetail} />
      <Route path="/services/webdev"  component={WebDevelopmentDetail} />
      <Route path="/services/enterprise"  component={EnterpriseSolutionsDetail} />
      <Route path="/services/cloudDetails"  component={CloudSecurityDetail} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
           
          
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
