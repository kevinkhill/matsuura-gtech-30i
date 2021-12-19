import GraphPage from "./GraphPage";
import MessagesPage from "./MessagesPage";
import OffsetsPage from "./OffsetsPage";
import PositionPage from "./PositionPage";
import SettingsPage from "./SettingsPage";
import SystemPage from "./SystemPage";

export default function PageProvider() {
  return {
    GraphPage,
    MessagesPage,
    OffsetsPage,
    PositionPage,
    SystemPage,
    SettingsPage
  };
}
