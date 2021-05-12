import { Team } from "./team.model";
import { Image } from "./image.model";

export class Project {
    id: string;
    name: string;
    description: string;
    role: string;
    goal: string;
    thumbnail: string;
    teams: Team[] = [];
    images: Image[] = [];
}