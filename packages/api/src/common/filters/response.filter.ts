import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ResponseFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status.toString().startsWith('4')) {
      return response.status(status).json({
        status: 'fail',
        data: exception.message,
      });
    } else {
      return response.status(status).json({
        status: 'error',
        message: exception.message,
        code: status,
      });
    }
  }
}
