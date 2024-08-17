import { cn } from "@/utils/client-utils";
import { FC, useId } from "react";
import { techTags } from "@/utils/constants/tags";

interface IFilterProps {
    tags: string[];
    onSetTags: Function;
    disabledTags: string[];
}

const ProjectFilter: FC<IFilterProps> = ({
    tags,
    onSetTags,
    disabledTags,
  }) => {
    const id = useId();
    return (
      <div className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {techTags?.map((el) => (
            <li
              onClick={() => {
                if (disabledTags.includes(el)) {
                  if (tags.includes(el)) {
                    onSetTags(tags.filter((item: string) => item !== el));
                  } else {
                    onSetTags([...tags, el]);
                  }
                }
              }}
              className={cn(
                "py-1 px-4 rounded-full border border-purple-400 dark:hover:bg-purple-500 hover:bg-purple-300 duration-300 cursor-pointer select-none",
                tags.includes(el) ? "bg-purple-300 dark:bg-purple-500" : "",
                !disabledTags.includes(el)
                  ? "cursor-not-allowed border-gray-300 text-gray-300 dark:border-gray-700 dark:text-gray-700 dark:hover:bg-opacity-0 hover:bg-opacity-0"
                  : ""
              )}
              key={`tag-${el + id}`}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProjectFilter;