import React from 'react';
import BasicInfo from '../components/datenschutz/BasicInfo';
import AccessData from '../components/datenschutz/AccessData';
import IPManagement from '../components/datenschutz/IPManagement';
import Cookies from '../components/datenschutz/Cookies';
import PersonalData from '../components/datenschutz/PersonalData';
import ContactData from '../components/datenschutz/ContactData';
import Comments from '../components/datenschutz/Comments';
import Analytics from '../components/datenschutz/Analytics';
import SocialMedia from '../components/datenschutz/SocialMedia';
import Newsletter from '../components/datenschutz/Newsletter';
import UserRights from '../components/datenschutz/UserRights';
import DataDeletion from '../components/datenschutz/DataDeletion';
import ObjectionRight from '../components/datenschutz/ObjectionRight';

export default function Datenschutz() {
  return (
    <div className="flex-grow bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg">
          <IPManagement />
          <BasicInfo />
          <AccessData />
          <Cookies />
          <PersonalData />
          <ContactData />
          <Comments />
          <Analytics />
          <SocialMedia />
          <Newsletter />
          <UserRights />
          <DataDeletion />
          <ObjectionRight />
        </div>
      </div>
    </div>
  );
}