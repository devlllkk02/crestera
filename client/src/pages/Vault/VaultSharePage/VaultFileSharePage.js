import React from 'react';
import { useParams } from 'react-router';

//components
import Navbar from '../../../components/Navbar/Navbar';
import FileShare from '../../../components/Vault/Share/FileShare';

function VaultFileSharePage() {
  return (
    <>
      <Navbar />
      <FileShare />
    </>
  );
}

export default VaultFileSharePage;
