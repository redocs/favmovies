import { IIcon } from "@/types"

export function IconStar({ color = '#F6C725', width = 16, height = 15 }: IIcon) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${width} ${height}`} style={{ color: color, width: width, height: height }}>
        <path fill="currentcolor" d="M7.89 12.07 3.009 15l1.289-5.547L0 5.703l5.664-.469L7.891 0l2.226 5.234 5.664.47-4.297 3.75L12.774 15 7.89 12.07Z" />
    </svg>
}