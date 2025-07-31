import React, { useState } from 'react';

const locations = [
  {
    name: 'Couiza',
    department: 'Aude (11)',
    size: '7,000 m²',
    zoning: 'To confirm',
    accommodation: '292m² villa, possible tourist use',
    price: '€400,000',
    score: 4
  },
  {
    name: 'Château Ruins Property',
    department: 'Tarn-et-Garonne (82)',
    size: '70,000 m²',
    zoning: 'Check for heritage and tourism zoning',
    accommodation: '3 rentals + ruins',
    price: '€499,000',
    score: 3.5
  }
];

export default function App() {
  const [search, setSearch] = useState('');

  const filtered = locations.filter(loc =>
    loc.name.toLowerCase().includes(search.toLowerCase()) ||
    loc.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Glamping Location Tool</h1>
      <input
        type="text"
        placeholder="Search location or department"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
      />
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Location</th>
            <th>Department</th>
            <th>Land Size</th>
            <th>Zoning</th>
            <th>Accommodation</th>
            <th>Price</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((loc, idx) => (
            <tr key={idx}>
              <td>{loc.name}</td>
              <td>{loc.department}</td>
              <td>{loc.size}</td>
              <td>{loc.zoning}</td>
              <td>{loc.accommodation}</td>
              <td>{loc.price}</td>
              <td>{loc.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}