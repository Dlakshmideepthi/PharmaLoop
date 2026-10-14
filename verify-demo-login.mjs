const roles = [
  { email: 'admin@pharmaloop.com', role: 'Admin' },
  { email: 'pharmacy@pharmaloop.com', role: 'Pharmacy' },
  { email: 'distributor@pharmaloop.com', role: 'Distributor' },
  { email: 'manufacturer@pharmaloop.com', role: 'Manufacturer' },
];

for (const account of roles) {
  const res = await fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: account.email,
      password: 'demo123',
      role: account.role,
    }),
  });

  const data = await res.json();
  console.log(`${account.role}: status=${res.status}`);
  console.log(JSON.stringify({
    email: data.user?.email ?? data.error,
    role: data.user?.role ?? data.error,
    token: data.token ? 'present' : 'missing',
  }));
}
