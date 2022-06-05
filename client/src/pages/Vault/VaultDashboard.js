import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import List from '../../components/Vault/List';

const VaultDashboard = () => {

  const { folderId } = useParams();
  const [currentFolder, setCurrentFolder] = useState(
    folderId || 'main'
  );

  useEffect(() => setCurrentFolder(folderId || 'main'), [folderId]);

  
  
  return (
    <div>
      <List currentFolder={currentFolder} />
    </div>
  );
};

export default VaultDashboard;