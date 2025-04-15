import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function InvitationEditor() {
  const [formData, setFormData] = useState({
    groom: "",
    bride: "",
    date: "",
    time: "",
    venue: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-screen">
      {/* Left - Info Form */}
      <div className="w-1/2 bg-gray-50 p-6 overflow-y-auto">
        <div className="space-y-6 max-w-md">
          <Card>
            <CardHeader>👫 커플 정보</CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>신랑 이름</Label>
                <Input name="groom" value={formData.groom} onChange={handleChange} />
              </div>
              <div>
                <Label>신부 이름</Label>
                <Input name="bride" value={formData.bride} onChange={handleChange} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>📅 예식 정보</CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>날짜</Label>
                <Input type="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
              <div>
                <Label>시간</Label>
                <Input type="time" name="time" value={formData.time} onChange={handleChange} />
              </div>
              <div>
                <Label>장소</Label>
                <Input name="venue" value={formData.venue} onChange={handleChange} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>💌 초대 메시지</CardHeader>
            <CardContent>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right - iPhone Preview */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <div className="w-[320px] h-[660px] bg-white rounded-[40px] shadow-xl overflow-y-auto p-6 border-[8px] border-black">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">{formData.groom} & {formData.bride}</h1>
            <p>{formData.message}</p>
            <p className="mt-4 font-semibold">
              {formData.date} {formData.time && `(${formData.time})`}
            </p>
            <p>{formData.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
