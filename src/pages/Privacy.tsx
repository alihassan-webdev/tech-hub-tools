import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Clock } from 'lucide-react';

export const Privacy = () => {
  const lastUpdated = 'December 15, 2024';

  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your data is protected with industry-standard security measures'
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'All data processing happens securely with encryption in transit'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We\'re transparent about what data we collect and how we use it'
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have full control over your data and privacy settings'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Your privacy is our priority. Learn how we protect and handle your data.
          </p>
          <div className="flex items-center justify-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-slide-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {principles.map((principle, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <div className="glass p-8 rounded-3xl prose prose-invert max-w-none">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  1. Information We Collect
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    <strong>Tool Usage Data:</strong> We collect minimal data about how you use our tools to improve performance and user experience. This includes tool interaction patterns, error logs, and performance metrics.
                  </p>
                  <p>
                    <strong>Technical Information:</strong> We automatically collect technical information such as your browser type, operating system, IP address, and device information for security and optimization purposes.
                  </p>
                  <p>
                    <strong>User-Provided Data:</strong> When you contact us or use our services, you may provide information such as your name, email address, and any content you share with us.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">2. How We Use Your Information</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our tools and services</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Detect and prevent fraud, abuse, and security incidents</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">3. Data Processing and Storage</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    <strong>Client-Side Processing:</strong> Whenever possible, our tools process your data directly in your browser. This means your sensitive information never leaves your device for many of our tools.
                  </p>
                  <p>
                    <strong>Temporary Server Processing:</strong> Some tools require server-side processing for functionality. In these cases, we process your data temporarily and delete it immediately after providing the result.
                  </p>
                  <p>
                    <strong>No Permanent Storage:</strong> We do not permanently store the content you process through our tools unless explicitly stated and consented to by you.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">4. Data Sharing and Disclosure</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our platform</li>
                    <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Safety and Security:</strong> To protect our users, prevent fraud, or address security issues</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">5. Your Rights and Choices</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain types of data processing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">6. Cookies and Tracking</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We use cookies and similar technologies to improve your experience on our platform. These help us remember your preferences, analyze site usage, and provide personalized content.
                  </p>
                  <p>
                    You can control cookies through your browser settings. However, disabling certain cookies may limit some functionality of our tools.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">7. Security Measures</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We implement industry-standard security measures to protect your information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication measures</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">8. Children's Privacy</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">9. Changes to This Policy</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold gradient-text mb-4">10. Contact Information</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email: privacy@toolshub.dev</li>
                    <li>Website: Visit our Contact page</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
