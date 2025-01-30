import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/auth/authlayout'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EnvelopeIcon, LockClosedIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Progress } from '@/components/ui/progress'

// Password strength criteria
const PASSWORD_CRITERIA = {
  minLength: 8,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/
}

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    acceptTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: ''
  })
  const router = useRouter()

  const checkPasswordStrength = (password: string) => {
    let score = 0
    let feedback = []

    // Check minimum length
    if (password.length >= PASSWORD_CRITERIA.minLength) {
      score += 20
    } else {
      feedback.push(`At least ${PASSWORD_CRITERIA.minLength} characters`)
    }

    // Check uppercase
    if (PASSWORD_CRITERIA.hasUpperCase.test(password)) {
      score += 20
    } else {
      feedback.push('One uppercase letter')
    }

    // Check lowercase
    if (PASSWORD_CRITERIA.hasLowerCase.test(password)) {
      score += 20
    } else {
      feedback.push('One lowercase letter')
    }

    // Check numbers
    if (PASSWORD_CRITERIA.hasNumber.test(password)) {
      score += 20
    } else {
      feedback.push('One number')
    }

    // Check special characters
    if (PASSWORD_CRITERIA.hasSpecialChar.test(password)) {
      score += 20
    } else {
      feedback.push('One special character')
    }

    return {
      score,
      feedback: feedback.length > 0 ? `Missing: ${feedback.join(', ')}` : 'Strong password!'
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Check password strength when password field changes
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value))
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validatePhoneNumber = (phone: string) => {
    // Basic phone validation - allows formats like:
    // +1234567890, 1234567890, 123-456-7890, (123) 456-7890
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return phoneRegex.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setErrors({})
    
    // Validate phone number
    if (!validatePhoneNumber(formData.phone)) {
      setErrors(prev => ({
        ...prev,
        phone: 'Please enter a valid phone number'
      }))
      return
    }

    // Validate password strength
    const passwordValidation = checkPasswordStrength(formData.password)
    if (passwordValidation.score < 80) {
      setErrors(prev => ({
        ...prev,
        password: 'Password is not strong enough. ' + passwordValidation.feedback
      }))
      return
    }

    setLoading(true)

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`;
      const requestBody = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone
      };
      
      console.log('Making API request to:', apiUrl);
      console.log('Request body:', requestBody);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody),
        credentials: 'include',
      })

      // Log the response details
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      console.log('Content-Type:', contentType);

      if (!contentType || !contentType.includes('application/json')) {
        const textContent = await response.text();
        console.error('Received non-JSON response:', textContent);
        throw new Error('Server returned invalid response format');
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store token if it's in the response
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'Registration failed. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <p>
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.submit && (
          <div className="rounded-xl bg-red-50 dark:bg-red-900/50 p-4 text-sm">
            <div className="flex">
              <svg className="h-5 w-5 text-red-400 dark:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="ml-3 text-red-700 dark:text-red-400">{errors.submit}</p>
            </div>
          </div>
        )}

        <div className="space-y-5">
          <Input
            label="Full name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={<UserIcon className="h-5 w-5" />}
          />

          <Input
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={<EnvelopeIcon className="h-5 w-5" />}
          />

          <Input
            label="Phone number"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            icon={<PhoneIcon className="h-5 w-5" />}
            helper="Enter a valid phone number (e.g., +1234567890)"
          />

          <div className="space-y-2">
            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={<LockClosedIcon className="h-5 w-5" />}
            />
            {formData.password && (
              <div className="space-y-1">
                <Progress value={passwordStrength.score} className="h-2" />
                <p className={`text-sm ${passwordStrength.score >= 80 ? 'text-green-600' : 'text-amber-600'}`}>
                  {passwordStrength.feedback}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="terms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-primary-500"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                I agree to the{' '}
                <Link href="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          loading={loading}
          fullWidth
          size="lg"
          className="mt-8"
          disabled={!formData.acceptTerms}
        >
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
