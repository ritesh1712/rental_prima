import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Getting server session...');
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      console.log('No session found');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    console.log('Session found for user:', session.user.email);
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      console.log('Missing password data');
      return res.status(400).json({ message: 'Current password and new password are required' });
    }

    // Get user from database
    console.log('Finding user in database...');
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email: session.user?.email!,
    //   },
    //   select: {
    //     id: true,
    //     password: true,
    //   },
    // });

    const user = ''
    if (!user) {
      console.log('User not found in database');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found, verifying current password...');
    // Verify current password
    // const isValid = await bcrypt.compare(currentPassword, user.password);
    const isValid = ''

    if (!isValid) {
      console.log('Current password is incorrect');
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    console.log('Password verified, hashing new password...');
    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    console.log('Updating password in database...');
    // Update password in database
    // await prisma.user.update({
    //   where: {
    //     id: user.id,
    //   },
    //   data: {
    //     password: hashedPassword,
    //   },
    // });

    console.log('Password updated successfully');
    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Password change error:', error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return res.status(500).json({ 
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
    });
  }
}
