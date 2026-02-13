import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, TrendingUp, Settings, CheckCircle, AlertCircle, Cpu, HardDrive, Wifi, Zap, DollarSign, Clock, Users, Lock, AlertTriangle, HelpCircle, ChevronDown, ChevronUp, Award, BarChart3 } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import { useState } from 'react';

const ValidatorPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
  const injectGlobalStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0) translateX(20px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(10px) rotate(270deg);
        }
        100% {
          transform: translateY(0) translateX(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  };
  
  // Call this once when the component mounts
  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }
  
  const requirements = [
    {
      title: 'Minimum Stake Amount',
      description: '1,000,000 RAMA required to become a validator',
      status: 'required'
    },
    {
      title: '99.9% Uptime',
      description: 'Maintain high availability for network reliability',
      status: 'required'
    },
    {
      title: 'Validated Checkpoints',
      description: 'Sync checkpoints with Polygon PoS layer',
      status: 'required'
    }
  ];

  const hardwareRequirements = [
    {
      icon: Cpu,
      title: 'CPU',
      minimum: '8 Cores',
      recommended: '16+ Cores',
      description: 'Modern x86-64 processor (AMD EPYC or Intel Xeon recommended)'
    },
    {
      icon: HardDrive,
      title: 'Storage',
      minimum: '2 TB SSD',
      recommended: '4+ TB NVMe',
      description: 'High IOPS NVMe SSD for optimal block processing'
    },
    {
      icon: Server,
      title: 'RAM',
      minimum: '32 GB',
      recommended: '64+ GB',
      description: 'DDR4 ECC memory for production workloads'
    },
    {
      icon: Wifi,
      title: 'Network',
      minimum: '100 Mbps',
      recommended: '1 Gbps',
      description: 'Low-latency connection with static IP'
    }
  ];

  const validatorEconomics = [
    {
      icon: DollarSign,
      title: 'Block Rewards',
      value: '~2.5 RAMA',
      description: 'Per block validated (from 1% annual inflation pool)'
    },
    {
      icon: Zap,
      title: 'Transaction Fees',
      value: '~30%',
      description: 'Share of priority fees from transactions in your blocks'
    },
    {
      icon: Award,
      title: 'Checkpoint Rewards',
      value: 'Variable',
      description: 'Additional rewards for checkpoint submissions to Polygon'
    },
    {
      icon: BarChart3,
      title: 'Annual APY',
      value: '8-15%',
      description: 'Estimated annual return based on stake and uptime'
    }
  ];

  const slashingConditions = [
    {
      severity: 'high',
      title: 'Double Signing',
      penalty: '5% of stake',
      description: 'Signing two different blocks at the same height'
    },
    {
      severity: 'medium',
      title: 'Extended Downtime',
      penalty: '1% of stake',
      description: 'Missing more than 50% of blocks in a 24-hour period'
    },
    {
      severity: 'low',
      title: 'Checkpoint Miss',
      penalty: 'Reduced rewards',
      description: 'Failing to sign checkpoint submissions'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum stake required to become a validator?',
      answer: 'You need a minimum of 1,000,000 RAMA tokens to become a validator. This stake acts as collateral and demonstrates your commitment to network security. Delegators can also stake with existing validators if they don\'t meet the minimum.'
    },
    {
      question: 'How are validator rewards calculated?',
      answer: 'Validators earn rewards from three sources: block rewards (from the 1% annual inflation), transaction priority fees (EIP-1559), and checkpoint submission rewards. Your share depends on your stake weight, uptime, and block production efficiency.'
    },
    {
      question: 'What happens if my validator goes offline?',
      answer: 'Short downtime (< 2 hours) results in missed rewards but no penalties. Extended downtime (> 50% of blocks in 24 hours) triggers slashing of 1% of your stake. We recommend running backup nodes and monitoring systems.'
    },
    {
      question: 'Can I run a validator on cloud infrastructure?',
      answer: 'Yes, cloud providers like AWS, Google Cloud, and Azure work well. We recommend using dedicated instances (not shared) with NVMe storage. Geographic distribution across multiple data centers is ideal for redundancy.'
    },
    {
      question: 'How long does it take to unstake my RAMA?',
      answer: 'Unstaking requires a 21-day unbonding period. During this time, your tokens are locked and do not earn rewards. This period ensures network security and prevents flash attacks.'
    },
    {
      question: 'Do I need technical expertise to run a validator?',
      answer: 'Running a validator requires Linux system administration skills, understanding of blockchain concepts, and ability to maintain 24/7 uptime. We provide comprehensive documentation and community support.'
    }
  ];

  const rewards = [
    {
      icon: Shield,
      title: 'Validating Blocks',
      description: 'Earn rewards for successfully validating network transactions and maintaining consensus'
    },
    {
      icon: TrendingUp,
      title: 'Participating in Governance',
      description: 'Vote on network proposals and earn governance rewards (coming soon)'
    },
    {
      icon: Server,
      title: 'Supporting Network Health',
      description: 'Contribute to network security and decentralization while earning consistent rewards'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Setup Node Infrastructure',
      description: 'Deploy and configure your validator node with proper hardware specifications'
    },
    {
      step: 2,
      title: 'Stake Required Amount',
      description: 'Lock the minimum stake amount to become eligible for validation'
    },
    {
      step: 3,
      title: 'Register as Validator',
      description: 'Submit your validator registration through the validator portal'
    },
    {
      step: 4,
      title: 'Start Validating',
      description: 'Begin validating transactions and earning rewards'
    }
  ];

  const resources = [
    {
      title: 'How to Setup a Node',
      description: 'Complete guide for setting up your validator node',
      link: '#'
    },
    {
      title: 'Monitoring Tools',
      description: 'Tools to monitor your validator performance',
      link: '#'
    },
    {
      title: 'Validator API Docs',
      description: 'Technical documentation for validator operations',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Become a
            <span className="block text-gradient">
              Validator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Secure the Ramestta network, earn rewards, and contribute to the decentralized future of blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://validator.ramestta.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Shield className="mr-2" size={20} />
              Validator Portal
            </a>
            <Link to="/docs?page=become-validator" className="btn-secondary">
              <Settings className="mr-2" size={20} />
              Setup Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Validator Requirements</h2>
            <p className="text-xl text-gray-300">Meet these requirements to become a Ramestta validator</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  {req.status === 'required' ? (
                    <div className="w-12 h-12 bg-green-900/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30">
                      <CheckCircle className="text-green-400 icon-bounce" size={24} style={{animationDelay: `${index * 0.2}s`}} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-yellow-900/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-500/30">
                      <AlertCircle className="text-yellow-400 icon-bounce" size={24} style={{animationDelay: `${index * 0.2}s`}} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{req.title}</h3>
                <p className="text-gray-300 leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Hardware Requirements</h2>
            <p className="text-xl text-gray-300">Recommended specifications for running a production validator node</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareRequirements.map((hw, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-primary-500 rounded-xl flex items-center justify-center mb-4">
                  <hw.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{hw.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Minimum:</span>
                    <span className="text-yellow-400 font-medium">{hw.minimum}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Recommended:</span>
                    <span className="text-green-400 font-medium">{hw.recommended}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{hw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Rewards */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Earn Rewards by</h2>
            <p className="text-xl text-gray-300">Multiple ways to earn as a Ramestta validator</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <div key={index} className="card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 icon-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                  <reward.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reward.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reward.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How to Get Started</h2>
            <p className="text-xl text-gray-300">Follow these steps to become a validator</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="card p-6 text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validator Stats */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Network Statistics</h2>
            <p className="text-xl text-gray-300">Current validator network metrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">60+</div>
              <div className="text-gray-300">Active Validators</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
              <div className="text-gray-300">Network Uptime</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">2s</div>
              <div className="text-gray-300">Block Time</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">10K+</div>
              <div className="text-gray-300">TPS Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Validator Economics */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Validator Economics</h2>
            <p className="text-xl text-gray-300">Understand how validators earn rewards on Ramestta</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {validatorEconomics.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">{item.value}</div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <DollarSign className="text-primary-400 mr-2" size={24} />
              Reward Calculation Example
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 mb-4">For a validator with <span className="text-primary-400 font-semibold">5,000,000 RAMA</span> stake:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={16} /> ~180 blocks validated per day</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={16} /> ~450 RAMA in block rewards daily</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={16} /> ~135 RAMA in transaction fees daily</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={16} /> ~213,000 RAMA annually (~4.3% APY base)</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Note: Actual rewards vary based on:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Network transaction volume</li>
                  <li>• Your stake weight vs total staked</li>
                  <li>• Uptime and block production</li>
                  <li>• Delegator commissions (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slashing Conditions */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Slashing Conditions</h2>
            <p className="text-xl text-gray-300">Understand the penalties for validator misbehavior</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {slashingConditions.map((condition, index) => (
                <div key={index} className={`card p-6 border-l-4 ${
                  condition.severity === 'high' ? 'border-l-red-500' :
                  condition.severity === 'medium' ? 'border-l-yellow-500' : 'border-l-blue-500'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-3 md:mb-0">
                      <AlertTriangle className={`mr-3 ${
                        condition.severity === 'high' ? 'text-red-400' :
                        condition.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                      }`} size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{condition.title}</h3>
                        <p className="text-gray-400 text-sm">{condition.description}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${
                      condition.severity === 'high' ? 'bg-red-900/50 text-red-300' :
                      condition.severity === 'medium' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-blue-900/50 text-blue-300'
                    }`}>
                      <span className="font-semibold">{condition.penalty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start">
                <Shield className="text-green-400 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Slashing Protection Tips</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Never run the same validator keys on multiple machines</li>
                    <li>• Use a remote signer to prevent key exposure</li>
                    <li>• Set up comprehensive monitoring and alerting</li>
                    <li>• Maintain backup infrastructure for failover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about running a Ramestta validator</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center">
                    <HelpCircle className="text-primary-400 mr-4 flex-shrink-0" size={24} />
                    <span className="text-white font-semibold">{faq.question}</span>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-400 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-10 text-gray-300 leading-relaxed border-l-2 border-primary-500/30 ml-2">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Validator Resources</h2>
            <p className="text-xl text-gray-200">Everything you need to run a successful validator</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-200 mb-6">{resource.description}</p>
                <a 
                  href={resource.link}
                  className="btn-secondary inline-flex items-center"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidatorPage;