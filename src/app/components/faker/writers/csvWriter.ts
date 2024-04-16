export function writeStringArrayToCsv(data: string[], filename = 'mockManga.csv') {
  const csvContent = data.join('\n');
  const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const csvUrl = URL.createObjectURL(csvBlob);

  const link = document.createElement('a');
  link.href = csvUrl;
  link.download = filename;
  link.click();

  // Optional: Revoke the object URL after download to avoid memory leaks
  URL.revokeObjectURL(csvUrl);
}

// Usage:
// const myData = ['apple', 'banana', 'orange'];
// writeStringArrayToCsv(myData); // Triggers download of 'data.csv'