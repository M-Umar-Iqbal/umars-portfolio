export type ICallType = "getRequest";
export interface ApiResponse<T> {
    statusCode: number;
    data: T;
};
export interface IAboutData {
    name: string;
    title: string;
    location: string;
    bio: string;
    skills: string[];
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
    };
};


export interface IAboutResponse {
    about: IAboutData
}

export interface Blog {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    tags: string[];
};

export interface IBlogsData {
    blogs: Blog[];
};

export interface TeamMember {
    id: number;
    name: string;
    role: string;
};

export interface Project {
    id: number;
    name: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;
    team: TeamMember[];
};

export interface IProjectsData {
    projects: Project[];
};
