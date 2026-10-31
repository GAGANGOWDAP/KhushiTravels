const fs = require('fs');

let header = fs.readFileSync('components/Header.tsx', 'utf8');
header = header.replace(
  'className="h-9 md:h-10 w-auto transition-transform duration-200 hover:opacity-95"',
  'className="h-9 md:h-10 w-auto transition-transform duration-200 hover:opacity-95 rounded-lg"'
);
fs.writeFileSync('components/Header.tsx', header, 'utf8');

let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
footer = footer.replace(
  'className="h-16 w-auto drop-shadow-md"',
  'className="h-14 sm:h-16 w-auto drop-shadow-md rounded-xl"'
);
footer = footer.replace(
  'className="h-14 w-auto mx-auto drop-shadow-md"',
  'className="h-12 sm:h-14 w-auto mx-auto drop-shadow-md rounded-xl"'
);
fs.writeFileSync('components/Footer.tsx', footer, 'utf8');

console.log('Updated logo classes in Header.tsx and Footer.tsx');

