import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Activity, Users, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to HealthCare App</h1>
        <p className="text-xl text-gray-600">Your Health, Our Priority</p>
      </header>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-semibold mb-4">
              Get Health Advice Instantly
            </h2>
            <h4 className="text-3xl font-semibold mb-4">
              "Check symptoms, get remedies, and stay informed."
            </h4>
            <p className="text-gray-600 mb-6">
              Expert health advice is just a step away. Choose your medical area
              connect with an active doctor, and receive quick advice or
              first-aid solutions tailored to your issue. Simple, fast, and
              reliable care—right when you need it.
            </p>
          </div>
          <div className=" md:w-1/2 mb-8 md:mb-0">
            <img src="src/assets/images/home.png " alt="Healthcare" />
          </div>
        </div>
        <div>
          <h3 className=" text-center text-3xl font-semibold mb-4 ">
            Transforming Healthcare with Our Doctor Consultation Bot
          </h3>
          <div className="flex items-center justify-center">
            <Link
              to="/health-bot"
              className="bg-[#5CF7F8] text-black px-6 py-3 hover:bg-gray-300 transitionduration-300 rounded-xl border-s-black flex items-center justify-center font-semibold"
            >
              Connect with Experts
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex gap-3">
          <FeatureCard
            icon={<MessageCircle size={48} className="text-blue-500 mb-4  " />}
            title="24/7 AI Support"
            description="Get instant answers to your health queries anytime, anywhere."
          />
          <FeatureCard
            icon={<Activity size={48} className="text-blue-500 mb-4" />}
            title="Health Tracking"
            description="Monitor your vital signs and health progress over time."
          />
          <FeatureCard
            icon={<Users size={48} className="text-blue-500 mb-4" />}
            title="Expert Consultations"
            description="Connect with healthcare professionals for personalized advice."
          />
          <FeatureCard
            icon={<DollarSign size={48} className="text-blue-500 mb-4" />}
            title="Affordable Plans"
            description="Access quality healthcare services at competitive prices."
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">
          Discover Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReasonCard
            title="Personalized Remediest"
            description="Get instant, customized treatment options based on your specific symptoms."
          />
          <ReasonCard
            title="Health Knowledge"
            description="Stay informed with tips and updates on health topics that matter to you."
          />
          <ReasonCard
            title="Symptom Checker"
            description="Enter your health symptoms to receive immediate insights tailored to you."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ReasonCard = ({ title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
