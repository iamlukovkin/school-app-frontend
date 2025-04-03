import Corruption from '../corruption/Corruption';
import About from '../about/About';
import Drones from '../drones/Drones';
import Extremism from '../extremism/Extremism';
import HelpPhones from '../helpPhones/HelpPhones';
import RoadRules from '../roadRules/RoadRules';
import SafetyNetwork from '../safetyNetwork/SafetyNetwork';
import Scammers from '../scammers/Scammers';
import ScooterRules from '../scooterRules/ScooterRules';
import FirstPage from '../firstPage/FirstPage';

export default function PagesAndLinks() {

  return {
    first_page: {
      content: FirstPage(),
      isInSideBar: false
    },
    scooter_rules: {
      content: ScooterRules(),
      isInSideBar: true
    },
    corruption: {
      content: Corruption(),
      isInSideBar: true
    },
    drones: {
      content: Drones(),
      isInSideBar: true
    },
    extremism: {
      content: Extremism(),
      isInSideBar: true
    },
    help_phones: {
      content: HelpPhones(),
      isInSideBar: true
    },
    road_rules: {
      content: RoadRules(),
      isInSideBar: true
    },
    safety_network: {
      content: SafetyNetwork(),
      isInSideBar: true
    },
    scammers: {
      content: Scammers(),
      isInSideBar: true
    },
    about: {
      content: About(),
      isInSideBar: false,
    }
  };
}
