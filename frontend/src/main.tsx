import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Activity, ClipboardList, Factory, Gauge, PackageCheck } from 'lucide-react';
import './styles.css';

type Page = 'dashboard' | 'orders' | 'quality';

const orders = [
  { no: 'WO-2026-001', item: 'Control Panel A', qty: 120, status: 'Planned' },
  { no: 'WO-2026-002', item: 'Sensor Module B', qty: 80, status: 'In Progress' },
  { no: 'WO-2026-003', item: 'Drive Unit C', qty: 45, status: 'Completed' },
];

const qualityChecks = [
  { line: 'Line A', item: 'Control Panel A', result: 'Pass', inspector: 'Kim' },
  { line: 'Line B', item: 'Sensor Module B', result: 'Review', inspector: 'Park' },
  { line: 'Line C', item: 'Drive Unit C', result: 'Pass', inspector: 'Lee' },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <Factory size={24} />
          <span>MES Practice</span>
        </div>
        <nav>
          <button
            className={currentPage === 'dashboard' ? 'active' : undefined}
            type="button"
            onClick={() => setCurrentPage('dashboard')}
          >
            <Gauge size={18} />
            Dashboard
          </button>
          <button
            className={currentPage === 'orders' ? 'active' : undefined}
            type="button"
            onClick={() => setCurrentPage('orders')}
          >
            <ClipboardList size={18} />
            Work Orders
          </button>
          <button
            className={currentPage === 'quality' ? 'active' : undefined}
            type="button"
            onClick={() => setCurrentPage('quality')}
          >
            <PackageCheck size={18} />
            Quality
          </button>
        </nav>
      </aside>

      <section className="content">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'orders' && <OrdersPage />}
        {currentPage === 'quality' && <QualityPage />}
      </section>
    </main>
  );
}

function DashboardPage() {
  return (
    <>
      <PageHeader eyebrow="Manufacturing Execution System" title="Production Dashboard" />

      <section className="metrics" aria-label="production metrics">
        <article>
          <span>OEE</span>
          <strong>87.4%</strong>
        </article>
        <article>
          <span>Today Output</span>
          <strong>1,248</strong>
        </article>
        <article>
          <span>Defect Rate</span>
          <strong>1.6%</strong>
        </article>
      </section>

      <section className="table-panel">
        <h2>Recent Work Orders</h2>
        <OrdersTable />
      </section>
    </>
  );
}

function OrdersPage() {
  return (
    <>
      <PageHeader eyebrow="Production Control" title="Work Orders" />

      <section className="table-panel">
        <h2>Work Order List</h2>
        <OrdersTable />
      </section>
    </>
  );
}

function QualityPage() {
  return (
    <>
      <PageHeader eyebrow="Inspection" title="Quality" />

      <section className="table-panel">
        <h2>Quality Checks</h2>
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>Item</th>
              <th>Result</th>
              <th>Inspector</th>
            </tr>
          </thead>
          <tbody>
            {qualityChecks.map((check) => (
              <tr key={`${check.line}-${check.item}`}>
                <td>{check.line}</td>
                <td>{check.item}</td>
                <td>{check.result}</td>
                <td>{check.inspector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <button type="button">
        <Activity size={18} />
        Live
      </button>
    </header>
  );
}

function OrdersTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Order No</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.no}>
            <td>{order.no}</td>
            <td>{order.item}</td>
            <td>{order.qty}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
