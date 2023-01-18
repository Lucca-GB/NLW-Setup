interface HabitProps {
        completed: number;
}

export function Habits(props: HabitProps) {
        return(
                <p className="bg-zinc-900 w-10 h-10 text-white reounded m-2 flex items-center justify-center">{props.completed}</p>
        )
}