module.exports = ({
    name: "help",
    aliases: ['h', 'commands', 'cmds'],
    description: "Hiển thị danh sách các lệnh",
    usage: "",
    category: "utility",
    code:
    `
    $thumbnail[$userAvatar[$clientID]]
    $description[Viết \`$getServerVar[prefix]command <Tên lệnh>\` để hiển thị thông tin của một lệnh
Hỗ trợ:
\`\`\`
help
command
invite
ping

\`\`\`
Giải trí:
\`\`\`
meme


\`\`\`
Level:
\`\`\`

levels (Xem bxh hiện tại)
exp (Xem số exp hiện tại)

\`\`\`
Tiền ảo:
\`\`\`
daily (Nhận trợ cấp hàng ngày)
work (Làm việc)
beg (Cosplay thành viên Cái Bang)
give (Give tiền cho thành viên khác)
rl (Chơi đỏ đen)
cash (Xem số dư hiện tại)
lb (Xem bxh số tiền)
award (Chỉ dev mới sử dụng được)
\`\`\`
Thông tin:
\`\`\`

roleinfo 

botinfo (Xem thông tin của bot)
developerinfo (Xem thông tin của dev)
\`\`\`
Music:
\`\`\`
play
stop
pause
resume
skip
skipto
queue
lyrics
volume
loopqueue
loopsong
nowplaying
\`\`\`
Khác: 
\`\`\`
avatar (Check avatar)

\`\`\`

]
$color[RANDOM]`
    })
