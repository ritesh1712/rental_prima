import React from 'react'
import Container from '@/components/container/Container'

function settings() {
  return (
    <Container>

    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
    <h2 className="text-lg font-semibold text-neutral-800 mb-4">Platform Settings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-800">Commission Rates</h3>
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Standard Rate</span>
                <input type="text" value="10%" className="w-20 px-2 py-1 text-sm border border-neutral-300/30 rounded bg-gray-100"/>
            </div>
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <span className="text-sm text-neutral-600">Premium Rate</span>
                <input type="text" value="15%" className="w-20 px-2 py-1 text-sm border border-neutral-300/30 rounded bg-gray-100"/>
            </div>
        </div>
        <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-800">Verification Settings</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" checked className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">Email Verification</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" checked className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">Phone Verification</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">ID Verification</span>
                </label>
            </div>
        </div>
        <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-800">Payment Gateway</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" checked className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">Stripe</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" checked className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">PayPal</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-neutral-600"/>
                    <span className="ml-2 text-sm text-neutral-600">Bank Transfer</span>
                </label>
            </div>
        </div>
    </div>
    <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Save Changes</button>
    </div>
</div>
    </Container>
  )
}

export default settings