import MyNav from '@/pages/components/Navbar'

export default function NotFound() {
    return (
        <>
            <MyNav />
            <div className="min-h-dvh flex items-center justify-center">
                <h1>ไม่พบข้อมูลผู้ใช้นี้</h1>
            </div>
        </>
    )
}