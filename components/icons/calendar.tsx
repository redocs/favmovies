import { IIcon } from "@/types"

export function IconCalendar({ color = '#F6C725', width = 16, height = 15 }: IIcon) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${width} ${height}`} style={{ color: color, width: width, height: height }}>
        <path fill="currentcolor" d="M0 15V5h15v10H0ZM15 1.25v3.125H0V1.25h3.75v1.875h.625V1.25h6.25v1.875h.625V1.25H15Zm-11.25 0V0h.625v1.25H3.75Zm6.875 0V0h.625v1.25h-.625Z" />
    </svg>
}