import { useWallet } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

import "@solana/wallet-adapter-react-ui/styles.css";

export const SolanaConnect: React.FC = () => {
  const { publicKey, connect } = useWallet();

  return (
    <WalletModalProvider>
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          zIndex: 1000, // Ensure it stays on top
        }}
      >
        <WalletMultiButton>
          <span
            style={{
              color: "#ffffff",
              fontFamily: "Jetbrains Mono",
              padding: "10px", // Reduced padding for a better appearance
            }}
          >
            CONNECT WALLET
          </span>
        </WalletMultiButton>
      </div>
    </WalletModalProvider>
  );
};