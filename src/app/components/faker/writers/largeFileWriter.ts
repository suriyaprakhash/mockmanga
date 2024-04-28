const chunkSize: number = 10000; 

interface ArrayChunk {
    [key: number]: string;
  }
  
  const writeArrayToIndexedDB = async (array: string[]) => {
    const db = await openIndexedDB();
    const transaction = db.transaction('myArrayStore', 'readwrite');
    const store = transaction.objectStore('myArrayStore');
  
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk: ArrayChunk = array.slice(i, i + chunkSize);
      store.add(chunk);
    }
  
    transaction.oncomplete = () => {
      console.log('Array chunks written to IndexedDB successfully');
    };
  
    transaction.onerror = (error) => {
      console.error('Error writing to IndexedDB:', error);
    };
  };

// Helper function to open IndexedDB connection
async function openIndexedDB(): Promise<IDBDatabase> {
    const dbName: string = 'myDatabase';
    const storeName: string = 'myArrayStore';
  
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
  
      request.onupgradeneeded = (event: any) => {
        const db: IDBDatabase = event.target.result;
        const store = db.createObjectStore(storeName, { keyPath: 'id' });
      };
  
      request.onsuccess = (event: any) => {
        resolve(event.target.result);
      };
  
      request.onerror = (error) => {
        reject(error);
      };
    });
  }


  const createBlobFromChunks = (arrayChunk: ArrayChunk[], type: 'csv' | 'json') => {
    const lineContent = arrayChunk.join('');
    const blob = new Blob([lineContent], { type: getMimeType(type) });
    return blob;
  };
  
  export const downloadArrayToFile = async (lineContent: string[],  type: 'csv' | 'json', filename = 'mockManga') => {
    const chunks: ArrayChunk[] = [];
    const array = lineContent.join('\n');

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
  
    const blob = createBlobFromChunks(chunks, type);
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = filename + '.' + type; // Set desired file name
    link.click();
  
    URL.revokeObjectURL(url); // Clean up memory usage
  };


  const  getMimeType = (type: 'csv' | 'json') => {
    switch(type) {
      case 'csv':  
        return 'text/csv;charset=utf-8'
      case 'json':
        return 'application/json;charset=utf-8'
    }
  }