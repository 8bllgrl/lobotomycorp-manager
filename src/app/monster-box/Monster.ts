import { GoodBadNeutralEnum } from "./GoodBadNeutralEnum";

export interface Monster {
    picture: string;
    stats: {
      red: GoodBadNeutralEnum | string;
      yellow: GoodBadNeutralEnum | string;
      purple: GoodBadNeutralEnum | string;
      blue: GoodBadNeutralEnum | string;
    };
    name: string;
    infacility: boolean;
  }