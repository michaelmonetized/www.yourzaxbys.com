# Zaxby's Franchise Management Platform

A comprehensive management platform designed specifically for Zaxby's franchise owners, above-store team members, and in-store managers to streamline operations, track performance metrics, and manage all aspects of store operations.

## 🎯 Overview

This platform empowers Zaxby's franchisees with powerful tools to optimize their operations, improve performance, and manage their teams effectively. From real-time analytics to complete HR management, this all-in-one solution helps franchise owners maximize their success.

## ✨ Key Features

### 📊 Performance Analytics
- **Sales Metrics**: Real-time sales tracking, trend analysis, and forecasting
- **Labor Management**: Cost optimization, scheduling efficiency, and overtime monitoring
- **Waste Tracking**: Food waste monitoring and reduction strategies
- **COGS Analysis**: Ingredient cost tracking and menu profitability
- **Variance Analysis**: Budget vs. actual performance tracking
- **Guest Experience**: Customer satisfaction scores and review management
- **Operational Excellence**: SOP compliance and quality control metrics
- **Audit Management**: Steritech and Health Department score tracking

### 👥 Human Resources
- **Hiring Process**: Complete ATS with applicant communication tools
- **Onboarding**: Digital workflows and training management
- **Attendance**: Time tracking and schedule management
- **Rewards & Pay**: Performance recognition and payroll management
- **Training**: Agenda creation and progress tracking

### 👕 Uniform Management
- **Allocation Tracking**: Employee uniform assignments and condition monitoring
- **Sales Management**: Uniform inventory and employee purchases

### 🔧 Maintenance & Operations
- **Ticket System**: Maintenance issue reporting and resolution tracking
- **Equipment Management**: Inventory, maintenance schedules, and vendor management
- **Smallwares**: Ordering, fulfillment, and usage tracking

### 🎉 Catering & Marketing
- **CRM System**: Customer relationship and order management
- **Local Marketing**: Campaign management and ROI tracking

## 🚀 Technology Stack

- **Frontend**: Next.js 15 with React 19
- **Backend**: Convex for real-time data management
- **Authentication**: Clerk for secure user management
- **UI**: Radix UI components with Tailwind CSS
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Monitoring**: Sentry for error tracking

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Convex account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/michaelmonetized/www.yourzaxbys.com.git
cd yourzaxbys.com
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CONVEX_DEPLOYMENT=your_convex_deployment_url
```

5. Start the development server:
```bash
bun dev
# or
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth.ts            # Authentication configuration
│   └── page.tsx           # Landing page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── emails/           # Email templates
├── convex/               # Convex backend functions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # Context providers
└── public/               # Static assets
```

## 🔐 User Roles

- **Franchise Owner**: Full access to all features across all locations
- **Above Store Team**: Multi-location management capabilities
- **Store Manager**: Single location management with limited corporate features
- **Assistant Manager**: Limited management features
- **Team Member**: Basic features and personal data access

## 📈 Performance Metrics

- **Response Time**: < 2 seconds for all page loads
- **Uptime**: 99.9% availability
- **Scalability**: Support for 1000+ concurrent users
- **Mobile Responsive**: Full functionality on mobile devices

## 🛡️ Security & Compliance

- **GDPR Compliance**: Data protection and privacy controls
- **PCI DSS**: Payment card industry security standards
- **Data Encryption**: End-to-end encryption for sensitive data
- **Audit Logging**: Comprehensive activity tracking

## 📊 Analytics & Reporting

- Real-time dashboards with live data visualization
- Custom report generation and scheduled delivery
- Export capabilities (PDF, Excel, CSV)
- Interactive charts and graphs
- AI-powered insights and recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Zaxby's Franchising LLC. All rights reserved.

## 📞 Support

For support and questions:
- Email: support@yourzaxbys.com
- Documentation: [docs.yourzaxbys.com](https://docs.yourzaxbys.com)
- Status Page: [status.yourzaxbys.com](https://status.yourzaxbys.com)

## 🗺️ Roadmap

- [ ] Mobile app development (iOS/Android)
- [ ] AI-powered predictive analytics
- [ ] Advanced reporting with machine learning
- [ ] Integration marketplace
- [ ] Multi-brand support for other restaurant chains

---

**Built with ❤️ for Zaxby's Franchisees**