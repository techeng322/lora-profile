import Points from '@/components/Points'
import ProfileHeader from './ProfileHeader'

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen mt-11 md:max-w-[75%]">
      <ProfileHeader />
      <Points />
    </div>
  )
}

export default ProfilePage
