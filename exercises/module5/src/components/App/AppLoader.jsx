import { ProviderWrapper as VoteProviderWrapper } from "../../contexts/VoteContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <VoteProviderWrapper >
        <App />
      </VoteProviderWrapper >
  )
}

export default AppLoader;