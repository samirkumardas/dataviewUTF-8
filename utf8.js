DataView.prototype.getString = function(offset,length){
        var self = this,bitArray = [], firstByte, highSurrogate, lowSurrogate, codePoint;
        length = length || self.byteLength;
        while( length > 0  ) {
            firstByte = self.getUint8(offset);
            if(self.getUint8(offset) <= 127) {
              bitArray.push(self.getUint8(offset++));
              length--;
            }
            else if(self.getUint8(offset) >= 128 && self.getUint8(offset) <= 223) {
              bitArray.push(((self.getUint8(offset++) & 0x1F) << 6) | (self.getUint8(offset++) & 0x3F));
              length -=2;
            }
            else if(self.getUint8(offset) >= 224 && self.getUint8(offset) <= 239) {
              bitArray.push(((self.getUint8(offset++) & 0x1F) << 12) | ((self.getUint8(offset++) & 0x3F) << 6 | (self.getUint8(offset++) & 0x3F)));
              length -=3;
            }
            else {
               codePoint = ((self.getUint8(offset++) & 0x07) << 18) | (((self.getUint8(offset++) & 0x3F) << 12) | ((self.getUint8(offset++) & 0x3F) << 6 | (self.getUint8(offset++) & 0x3F)));
               codePoint -= 0x10000;
               highSurrogate = (codePoint >> 10) + 0xD800;
               lowSurrogate = (codePoint % 0x400) + 0xDC00;
               bitArray.push(highSurrogate, lowSurrogate);
               length -=4;
            }
        }
        return String.fromCharCode.apply(null,bitArray);
    };
