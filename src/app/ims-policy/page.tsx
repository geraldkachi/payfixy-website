import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-0 min-h-screen p-6">
        <Navbar />

    <div className="max-w-7xl mx-auto bg-whit">
    <div className="flex flex-col items-center mt-20 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-[40px] leading-9 font-bold text-[#A51D21] mb-4">
        Integrated Management System (IMS) Policy
      </h1>
</div>
      <p className="text-sm text-gray-500">Date of Policy Notice: May 23, 2023</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
        <p className="text-gray-700 leading-6">
          This document defines the framework for how management systems are
          established, managed, measured, reported on, and continuously
          developed at <strong>Payfixy Limited</strong>. The company is pursuing
          ISO/IEC 27001:2013 and ISO/IEC 22301:2019 certifications to validate
          the adoption of best practices in information security and business
          continuity.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          1. Purpose of the IMS Policy
        </h2>
        <p className="text-gray-700 leading-6">
             The purpose of this document is to define an overall policy regarding management systems that is appropriate to the purpose of Payfixy Limited and includes:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Setting objectives for management systems.</li>
          <li>Committing to fulfilling applicable requirements.</li>
          <li>Driving continual improvement in processes and systems.</li>
        </ul>
        <p className="text-gray-700 leading-6">
        This Policy is available in electronic form and will be communicated within the organisation and to all relevant stakeholders and interested third parties.
        </p>
      </section>

      <section className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          2. IMS Policy Statement
        </h2>
       
        <ul className="space-y-4 ist-disc list-inside mt-3 text-gray-70">
                   <li>
                       Payfixy Limited’s current strategy and Integrated Management System provide the context 
                       for identifying, assessing, evaluating, and controlling information, process, or 
                       service-related risks through the establishment and maintenance of the IMS. The risk 
                       assessment and risk treatment plan capture how identified risks are controlled in 
                       alignment with Payfixy Limited’s risk management strategy.
                   </li>
                   <li>
                       In particular, business continuity and contingency plans, data backup procedures, 
                       access control to systems, and information security incident reporting are fundamental 
                       to this policy. All employees of Payfixy Limited shall have the responsibility of 
                       reporting incidents.
                   </li>
                   <li>
                       All employees of Payfixy Limited and external parties identified in the IMS are 
                       expected to comply with this policy. All staff and certain external parties will receive 
                       or be required to provide appropriate training.
                   </li>
                   <li>
                       A current version of this document is available to all members of staff on the Intranet. 
                       This policy is issued on a version-controlled basis under the signature of the Managing 
                       Director / Chief Executive Officer, Payfixy Limited.
                   </li>
                   <li>
                       Breach of the policy or security mechanism may warrant disciplinary measures, up to and 
                       including termination of employment/contract as well as legal action in line with the 
                       Cybercrime Prohibition Act 2015.
                   </li>
               </ul>
      </section>
      <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Core Objectives of the IMS</h2>
                <div className="space-y-4 text-gray-700">
                    <p>
                        Payfixy Limited defines the core objectives or purpose of the Integrated Management System (IMS) as follows:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Understand the needs of Payfixy Limited and the necessity for establishing Business Continuity, 
                            Information Security Management System policy, and objectives.
                        </li>
                        <li>
                            Implement and operate controls and measures for managing the overall capability of Payfixy Limited 
                            to handle disruptive incidents, information security, and its IT assets.
                        </li>
                        <li>
                            Monitor and review the performance and effectiveness of the Business Continuity Management System (BCMS) and Information Security Management System (ISMS).
                        </li>
                        <li>
                            Continually improve Payfixy Limited’s integrated management system based on objective measurement.
                        </li>
                    </ul>
                    <p>
                        Business continuity objectives will be documented in the Business Continuity Management Plan for the relevant financial year, 
                        together with details of how they will be achieved. Once approved, this plan will be reviewed on a quarterly basis 
                        as part of the management review process, at which time the objectives will also be reviewed to ensure they remain valid. 
                        If amendments are required, these will be managed through the organizational change management process.
                    </p>
                </div>
            </section>

            <section className='mt-4'>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">2 IMS Policy</h2>

                {/* 2.2 Scope of the IMS */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 Scope of the IMS</h3>
                    <p className="text-gray-700">
                        For the purposes of certification within Payfixy Limited, the boundaries of the Management Systems are defined in the 
                        <span className="font-semibold">Payfixy Limited IMS0401 Context, Requirements, and Scope</span>.
                    </p>
                </div>

                {/* 2.3 Requirements */}
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">2.3 Requirements</h3>
                    <p className="text-gray-700 mb-4">
                        A clear definition of the requirements for the Management Systems will be agreed upon and maintained with the business 
                        so that all activities are focused on fulfilling those requirements. Statutory, regulatory, and contractual requirements 
                        will also be documented and input into the planning process. Specific requirements regarding the security of new or 
                        changed systems or services will be captured as part of the design stage of each project.
                    </p>
                    <p className="text-gray-700">
                        It is a fundamental principle of the Payfixy Limited Integrated Management System that the controls implemented are driven 
                        by business needs. This will be regularly communicated to all staff through team meetings and briefing documents.
                    </p>
                </div>
            </section>


            <section className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        2.4 Top Management Leadership and Commitment
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Commitment to the Management Systems extends to senior levels of the organization and will be demonstrated 
                        through this IMS Policy and the provision of appropriate resources to develop the management systems and 
                        associated controls.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Top management ensures systematic reviews of program performance are conducted regularly to ensure objectives 
                        are met and issues are identified through audits and management processes. Management reviews can take various 
                        forms, including departmental and other management meetings.
                    </p>
                </section>

                {/* 2.5 Framework for Setting Objectives and Policy */}
                <section>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        2.5 Framework for Setting Objectives and Policy
                    </h3>
                    <p className="text-gray-700 mb-4">
                        The high-level objectives for information security within Payfixy Limited are defined within the document 
                        <span className="font-semibold">“Payfixy Limited IMS0401 Context, Requirements and Scope”</span>. These objectives 
                        are fundamental to the nature of the business and guide the setting of lower-level objectives within an annual 
                        cycle aligned with budget planning.
                    </p>
                    <p className="text-gray-700 mb-4">
                        IMS objectives for the financial year, along with plans for their achievement, will be documented and reviewed 
                        quarterly to ensure their validity. Amendments will be managed through the organizational change management process.
                    </p>
                    <p className="text-gray-700 mb-4">
                        In alignment with <span className="font-semibold">ISO/IEC 27001:2013</span>, control objectives and policy 
                        statements in Annex A of the standard will be adopted where appropriate. These controls will be regularly reviewed 
                        based on risk assessments and in line with <span className="font-semibold">Payfixy Limited IMS0601 IMS Risk 
                        Assessment and Treatment Process</span>. For details of controls implementing the policy statements, refer to 
                        <span className="font-semibold">Payfixy Limited IMS0604 Statement of Applicability</span>.
                    </p>
                </section>


                <section className="mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">2 IMS Policy</h2>

                {/* 2.6 Roles and Responsibilities */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        2.6 Roles and Responsibilities
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Within the field of Information Security Management, there are several key roles that ensure successful 
                        protection of the business from risks. Detailed responsibilities for each role are outlined in the 
                        document <span className="font-semibold">Payfixy Limited IMS0502 Roles, Responsibilities and Authorities</span>.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The <span className="font-semibold">Integrated Management System Manager</span> has overall authority for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>The identification, documentation, and fulfilment of applicable requirements.</li>
                        <li>Implementation and improvement of risk management processes.</li>
                        <li>Integration of processes.</li>
                        <li>
                            Compliance with statutory, regulatory, and contractual requirements in asset management for delivering 
                            products and services.
                        </li>
                        <li>Reporting performance and improvement to top management.</li>
                    </ul>
                </div>

                {/* 2.7 Continual Improvement Policy */}
                <div>
                    
                    <p className="text-gray-700 mb-4">
                        Payfixy Limited&apos;s policy regarding continual improvement is focused on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Enhancing the IMS&apos;s effectiveness across all areas within scope.</li>
                        <li>
                            Aligning current processes with good practices as outlined in 
                            <span className="font-semibold"> ISO/IEC 27001:2013</span> and <span className="font-semibold">ISO/IEC 22301</span>.
                        </li>
                        <li>Achieving and maintaining certification for the management systems.</li>
                        <li>
                            Increasing proactive management of the IMS and stakeholder perceptions of its effectiveness.
                        </li>
                        <li>
                            Making processes and controls more measurable for informed decision-making.
                        </li>
                        <li>Improving relationships with business units to which the IMS applies.</li>
                        <li>
                            Reviewing and updating relevant metrics annually based on historical data to maintain relevance.
                        </li>
                        <li>
                            Collecting improvement ideas from stakeholders, documenting them in the 
                            <span className="font-semibold"> Continual Improvement Log</span>, and evaluating them regularly.
                        </li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Risk management within the IMS is conducted across several levels, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Management planning for achieving objectives.</li>
                        <li>Information security and business continuity risk assessments.</li>
                        <li>Change management processes for assessing change-related risks.</li>
                        <li>Project-level assessments during significant business changes.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        High-level risk assessments are reviewed annually or when significant changes occur. For more details, 
                        refer to <span className="font-semibold">Payfixy Limited IMS0603 Information Security Risk Assessment and Treatment Process</span>.
                    </p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">2 IMS Policy</h2>

                {/* 2.6 Roles and Responsibilities */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        2.6 Roles and Responsibilities
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Within the field of Information Security Management, there are several key roles that ensure successful 
                        protection of the business from risks. Detailed responsibilities for each role are outlined in the 
                        document <span className="font-semibold">Payfixy Limited IMS0502 Roles, Responsibilities and Authorities</span>.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The <span className="font-semibold">Integrated Management System Manager</span> has overall authority for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>The identification, documentation, and fulfilment of applicable requirements.</li>
                        <li>Implementation and improvement of risk management processes.</li>
                        <li>Integration of processes.</li>
                        <li>
                            Compliance with statutory, regulatory, and contractual requirements in asset management for delivering 
                            products and services.
                        </li>
                        <li>Reporting performance and improvement to top management.</li>
                    </ul>
                </div>

                {/* 2.7 Continual Improvement Policy */}
                <div>
                    
                    <p className="text-gray-700 mb-4">
                        Payfixy Limited&apos;s policy regarding continual improvement is focused on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Enhancing the IMS&apos;s effectiveness across all areas within scope.</li>
                        <li>
                            Aligning current processes with good practices as outlined in 
                            <span className="font-semibold"> ISO/IEC 27001:2013</span> and <span className="font-semibold">ISO/IEC 22301</span>.
                        </li>
                        <li>Achieving and maintaining certification for the management systems.</li>
                        <li>
                            Increasing proactive management of the IMS and stakeholder perceptions of its effectiveness.
                        </li>
                        <li>
                            Making processes and controls more measurable for informed decision-making.
                        </li>
                        <li>Improving relationships with business units to which the IMS applies.</li>
                        <li>
                            Reviewing and updating relevant metrics annually based on historical data to maintain relevance.
                        </li>
                        <li>
                            Collecting improvement ideas from stakeholders, documenting them in the 
                            <span className="font-semibold"> Continual Improvement Log</span>, and evaluating them regularly.
                        </li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Risk management within the IMS is conducted across several levels, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Management planning for achieving objectives.</li>
                        <li>Information security and business continuity risk assessments.</li>
                        <li>Change management processes for assessing change-related risks.</li>
                        <li>Project-level assessments during significant business changes.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        High-level risk assessments are reviewed annually or when significant changes occur. For more details, 
                        refer to <span className="font-semibold">Payfixy Limited IMS0603 Information Security Risk Assessment and Treatment Process</span>.
                    </p>
                </div>
            </section>
    </div>
  </div>
  )
}

export default page