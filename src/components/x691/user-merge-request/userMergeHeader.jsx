import React from 'react';


const UserMergeHeader = () => 
{   
    return (<>
            <div className='flex gap-2 mb-4 mt-4  flex-wrap justify-center'>
                    <div className=' user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                        <h2 className='text-white font-mono'>merge id</h2>
                    </div>
                    <div className=' user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto '>
                        <h2 className='text-white font-mono'>description</h2>
                    </div>
                    <div className=' user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                        <h2 className='text-white font-mono'>state</h2>
                    </div>
                    <div className=' user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                        <h2 className='text-white font-mono'>merge by</h2>
                    </div>
                    <div className='user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                        <h2 className='text-white font-mono'>source & target branch</h2>
                    </div>
                    <div className=' user-info-names text-center bg-[#890023] rounded-md  break-words h-[60px] px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto '>
                        <h2 className='text-white font-mono'>Author Information</h2>
                    </div>

            </div>
        </>
    )
}

export default UserMergeHeader;