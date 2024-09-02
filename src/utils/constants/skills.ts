interface ISkill {
    key: string;
    iconKey: string;
    name: string;
    description: string;
    experience: {
        level: "beginner" | "Intermediate" | "expert",
        yearsOfExperience: number,
        totalProjectsByUsingThisSkill: number,

    }
}

export const skills: ISkill[] = [
    {
        key: 'js',
        iconKey: '',
        name: 'Javascript',
        description: 'This is a description of Javascript',
        experience: {
            level: "expert",
            yearsOfExperience: 4,
            totalProjectsByUsingThisSkill: 10
        }
    },
    {
        key: 'react-js',
        iconKey: '',
        name: 'React.Js',
        description: 'This is a description of React js',
        experience: {
            level: "expert",
            yearsOfExperience: 4,
            totalProjectsByUsingThisSkill: 10
        }
    },
    {
        key: 'next-js',
        iconKey: '',
        name: 'Next.Js',
        description: 'This is a description of Next js',
        experience: {
            level: "expert",
            yearsOfExperience: 4,
            totalProjectsByUsingThisSkill: 10
        }
    },
    {
        key: 'tailwind-css',
        iconKey: '',
        name: 'Tailwind CSS',
        description: 'This is a description of Javascript',
        experience: {
            level: "expert",
            yearsOfExperience: 4,
            totalProjectsByUsingThisSkill: 10
        }
    }
];
