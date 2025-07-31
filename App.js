import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function GlampingToolApp() {
  const [properties, setProperties] = useState([]);
  const [newEntry, setNewEntry] = useState({
    link: '',
    location: '',
    price: '',
    landSize: '',
    notes: ''
  });

  const addProperty = () => {
    if (!newEntry.link || !newEntry.location) return;
    setProperties([...properties, newEntry]);
    setNewEntry({ link: '', location: '', price: '', landSize: '', notes: '' });
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">🌿 Glamping Location Tool</h1>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold">🔍 Add a New Property</h2>
          <Input
            placeholder="Listing link (e.g. Green-Acres URL)"
            value={newEntry.link}
            onChange={(e) => setNewEntry({ ...newEntry, link: e.target.value })}
          />
          <Input
            placeholder="Location"
            value={newEntry.location}
            onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
          />
          <Input
            placeholder="Price (€)"
            value={newEntry.price}
            onChange={(e) => setNewEntry({ ...newEntry, price: e.target.value })}
          />
          <Input
            placeholder="Land size (m² or ha)"
            value={newEntry.landSize}
            onChange={(e) => setNewEntry({ ...newEntry, landSize: e.target.value })}
          />
          <Textarea
            placeholder="Notes, zoning, contact info..."
            value={newEntry.notes}
            onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
          />
          <Button onClick={addProperty}>Add Property</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-4">📋 Logged Properties</h2>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Link</th>
                <th>Location</th>
                <th>Price</th>
                <th>Land</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((prop, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 text-blue-600 underline"><a href={prop.link} target="_blank">View</a></td>
                  <td>{prop.location}</td>
                  <td>{prop.price}</td>
                  <td>{prop.landSize}</td>
                  <td>{prop.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">🗓️ Daily Search Routine</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Search Green-Acres, Leboncoin, SeLoger, PAP, Notaires, etc.</li>
            <li>Use keywords: "terrain à vendre glamping", "gîtes", "camping", "eco-lodge", etc.</li>
            <li>Filter by region (Aude, Dordogne, Ariège, Pyrénées-Atlantiques)</li>
            <li>Check land size ≥ 5,000 m² and price ≤ €650,000</li>
            <li>Log promising listings with notes and agent info</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
