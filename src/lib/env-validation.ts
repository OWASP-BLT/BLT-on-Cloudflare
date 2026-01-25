/**
 * Environment validation
 * Ensures critical environment variables are set before the app starts
 * Prevents silent failures in production
 */

/**
 * Validate environment variables
 * Called once on app startup
 */
export function validateEnvironment() {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    return; // Skip validation on server-side
  }

  const errors: string[] = [];

  // Check required environment variables
  const requiredEnvVars = {
    NEXT_PUBLIC_API_BASE_URL: 'https://owaspblt.org/api/v1',
    NEXT_PUBLIC_ENVIRONMENT: 'http://localhost:8000/api/v1',
  };

  for (const [envVar, message] of Object.entries(requiredEnvVars)) {
    const value = process.env[envVar];
    
    if (!value || value.trim() === '') {
      errors.push(`❌ Missing: ${message}`);
      console.error(`Environment validation failed: ${envVar} is not set`);
    }
  }

  // Warn if API_BASE_URL defaults to localhost in production
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (apiUrl?.includes('localhost') || apiUrl?.includes('127.0.0.1')) {
      errors.push('❌ API_BASE_URL is set to localhost in production - this will not work');
    }
  }

  // Throw error if validation failed
  if (errors.length > 0) {
    const message = `Environment Validation Failed:\\n${errors.join('\\n')}`;
    console.error(message);
    
    // In development, show a warning. In production, throw error
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
      throw new Error(message);
    }
  }

  console.log('✅ Environment validation passed');
}
