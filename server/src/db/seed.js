import db from './index.js';

const samples = [
  ['Cedar Logistics', 'Update billing address', 'Client moved to a new office'],
  ['Byblos Retail', 'Add new user accounts', 'Three new staff members'],
  ['Phoenicia Tech', 'Export monthly report', 'Needed before the board meeting'],
  ['Mount Lebanon Clinic', 'Reset admin password', null],
];

const insert= db.prepare('INSERT INTO requests (client_name, title, description) VALUES (?, ?, ?)');
for (const sample of samples) {
    insert.run(...sample);
}
console.log(`Sample data inserted successfully. Inserted ${samples.length} records.`);