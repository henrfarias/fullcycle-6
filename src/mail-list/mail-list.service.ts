import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMailListDto } from './dto/create-mail-list.dto';
import { MailList, MailListDocument } from './schemas/mail-list.schema';

@Injectable()
export class MailListService {
  constructor(
    @InjectModel(MailList.name)
    private mailListModel: Model<MailListDocument>,
  ) {}

  async create({ emails }: CreateMailListDto) {
    const mailList = await this.findOne();
    if (!mailList) return this.mailListModel.create({ emails });
    await mailList.update({ emails }).exec();
    return mailList;
  }

  async findOne() {
    const [mailsList] = await this.mailListModel.find().exec();
    if (!mailsList) return null;
    return mailsList;
  }
}
